namespace JLearning.Entities
{
    public class usercourse
    {
        public string userId { get; set; }
        public string courseId { get; set; }
        public int totalLearned { get; set; }
        public DateTime lastLearn { get; set; }
    }
}
