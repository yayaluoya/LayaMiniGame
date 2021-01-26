using System.Collections.Generic;
using UnityEngine;

namespace LTGame
{


    public class LTGameObjPool
    {
        private static LTGameObjPool _instance;
        public static LTGameObjPool instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new LTGameObjPool();
                }
                return _instance;
            }
        }

        private Dictionary<string, LTGameObjPollData> _objPools;
        private Dictionary<string, Sprite> _spritePools;
        private GameObject _poolParent;

        public GameObject poolParent { get { return _poolParent; } }

        private LTGameObjPool()
        {
            _poolParent = new GameObject("ObjPool");
            _objPools = new Dictionary<string, LTGameObjPollData>();
            _spritePools = new Dictionary<string, Sprite>();
        }

        public void AddObjPool(string objName, GameObject sampleObj)
        {
            if (_objPools.ContainsKey(objName))
            {
               // LTDebug.Log("已存在重复的对象池" + objName);
            }
            else
            {
                _objPools.Add(objName, new LTGameObjPollData(objName, sampleObj));
            }
        }

        public GameObject GetObj(string objName)
        {
            LTGameObjPollData objPool = null;
            _objPools.TryGetValue(objName, out objPool);
            if (objPool == null) return null;
            return objPool.Get();
        }

        public void ReturnObj(GameObject obj)
        {
            ReturnObj(obj.name, obj);
        }

        public void ReturnObj(string objName, GameObject obj)
        {
            LTGameObjPollData objPool = null;
            _objPools.TryGetValue(objName, out objPool);
            if (objPool == null)
            {
                LTDebug.LogError("不存在指定对象池:" + objName);
                return;
            }
            objPool.Return(obj);
        }
        public Sprite GetSprite(string str)
        {
            Sprite icon = null;
            _spritePools.TryGetValue(str, out icon);
            return icon;
        }
        public void AddSprite(string str, Sprite icon)
        {
            if (!_spritePools.ContainsKey(str))
                _spritePools.Add(str, icon);
            else
                _spritePools[str] = icon;
        }
    }
}
