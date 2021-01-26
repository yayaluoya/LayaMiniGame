using System.Collections.Generic;
using UnityEngine;

namespace LTGame
{


    public class LTGameObjPollData
    {

        public string name;
        public int defaultSize { get; private set; }

        private GameObject _sample;
        private Stack<GameObject> _poolStack;

        public LTGameObjPollData(GameObject sample, int defaultSize = 1)
        {
            _Init(sample.name, sample, defaultSize);
        }

        public LTGameObjPollData(string name, GameObject sample, int defaultSize = 1)
        {
            _Init(name, sample, defaultSize);
        }

        private void _Init(string name, GameObject sample, int defaultSize)
        {
            this.name = name;
            _sample = sample;
            /*
            _sample = sample.NewInstance();
            _sample.transform.parent = LTGameObjPool.instance.poolParent.transform;
            _sample.SetActive(false);
            */
            _poolStack = new Stack<GameObject>();
            this.defaultSize = defaultSize;
            for (int i = 0; i < defaultSize; ++i)
            {
                var cacheObj = GameObject.Instantiate(sample);
                cacheObj.name = name;
                cacheObj.transform.parent = LTGameObjPool.instance.poolParent.transform;
                cacheObj.SetActive(false);
                Return(cacheObj);
            }
        }

        public GameObject Get()
        {
            GameObject obj = null;
            if (_poolStack.Count > 0)
            {
                obj = _poolStack.Pop();
            }
            else
            {
                obj = GameObject.Instantiate(_sample);
                obj.name = name;
                obj.transform.parent = LTGameObjPool.instance.poolParent.transform;
                //Debug.LogError("对象池大小不够,自动续对象池:" + name);
            }
            return obj;
        }

        public void Return(GameObject obj, bool keepParent = false)
        {
            obj.SetActive(false);
            if (!keepParent)
            {
                obj.transform.SetParent(LTGameObjPool.instance.poolParent.transform);
            }
            _poolStack.Push(obj);
        }

    }
}
