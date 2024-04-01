namespace NewsAPI.Model
{
    public class Category
    {
        public Category(long id, string name)
        {
            this.id = id;
            this.name = name;
        }

        public long id { get; set; }
        public string name { get; set; }
    }
}
