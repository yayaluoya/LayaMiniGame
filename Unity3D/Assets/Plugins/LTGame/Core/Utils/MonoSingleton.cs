using UnityEngine;

namespace LTGame
{
    /// <summary>
    /// 单例模式
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class MonoSingleton<T> : MonoBehaviour where T : MonoBehaviour
    {
        protected static T _instance;
        public static T instance
        {
            get
            {
                if (_instance == null)
                {
                    GameObject tempObj = new GameObject();
                    _instance = tempObj.AddComponent<T>();
                    tempObj.name = _instance.GetType().ToString();
                }
                return _instance;
            }
        }
    }
}
