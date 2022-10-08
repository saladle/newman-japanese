namespace JLearning.Entities
{
    public class Sublist
    {
        public Guid notewordId { get; set; }   
        public string kanji { get; set; }
        public string hirakata { get; set; }
        public string mean { get; set; }
        public string example { get; set; }
    }

    public class UserNote
    {
        public Guid userId { get; set; }
        public Guid notebookId { get; set; }
        public DateTime lastLearnAt { get; set; }
        public DateTime createAt { get; set; }
        public IEnumerable<Sublist> wordList { get; set; }
        public int totalWord { get; set; }

    }
}
