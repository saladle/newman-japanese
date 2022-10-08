using Dapper;
using JLearning;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using JLearning.Entities;

namespace JLearning.Controllers
{
    [ApiController]
    public class NotebookController : Controller
    {
        [Route("api/notebook/{userId}")]
        [HttpGet]
        public IActionResult getAllNoteBookOfUser(string userId)
        {
            try
            {
                var mySQLconnection = new MySqlConnection(Consts.dbConnection);

                string getAllNotebookCmd = "SELECT DISTINCT users.userId, notebooks.notebookId, lastLearnAt, createAt, totalWord FROM notewords, notebooks, users WHERE notewords.notebookId = notebooks.notebookId AND notebooks.userId = users.userId AND users.userId = @userId ORDER BY notebooks.notebookId";

                var parameter = new DynamicParameters();
                parameter.Add("@userId", userId);

                var notebooks = mySQLconnection.Query<UserNote>(getAllNotebookCmd, parameter);

                if (notebooks != null)
                {
                    UserNote preNote = null;
                    string getNoteWord = "SELECT notewordId, kanji, hirakata, mean, example from notewords where notebookId = @notebookId";
                    foreach (var notebook in notebooks)
                    {
                        if (preNote == null || preNote.notebookId != notebook.notebookId)
                        {
                            parameter = new DynamicParameters();
                            parameter.Add("@notebookId", notebook.notebookId);

                            notebook.wordList = mySQLconnection.Query<Sublist>(getNoteWord, parameter);
                        } 
                        preNote = notebook;
                    }
                    return Ok(notebooks);
                } else
                {
                    return BadRequest();
                }
            }
            catch
            {
                throw;
            }
        }
        
    }
}
