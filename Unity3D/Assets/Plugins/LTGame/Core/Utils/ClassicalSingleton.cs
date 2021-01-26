namespace LTGame
{
    /// <summary>
    /// 传统单例类
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ClassicalSingleton<T> where T : new()
    {

        protected static T mInstance;
        public static T Instance
        {
            get
            {
                if (mInstance == null)
                {
                    mInstance = new T();
                }
                return mInstance;
            }
        }
    }
}