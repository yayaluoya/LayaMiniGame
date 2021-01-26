using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace LTGame
{
    public class LTObjFinder : MonoBehaviour
    {

        private static Dictionary<string, List<LTObjFinder>> _mapDict = new Dictionary<string, List<LTObjFinder>>();

        public static LTObjFinder Find(string keyName)
        {
            List<LTObjFinder> findList;
            if (_mapDict.TryGetValue(keyName, out findList))
            {
                return findList[0];
            }
            return null;
        }

        public static List<LTObjFinder> FindAll(string keyName)
        {
            List<LTObjFinder> findList;
            if (_mapDict.TryGetValue(keyName, out findList))
            {
                return findList;
            }
            return null;
        }

        public string nameKey;

        private string _cacheNameKey;
        private bool _isAdded;

        private void Awake()
        {
            if (_isAdded) return;
            _isAdded = true;
            _cacheNameKey = nameKey;
            List<LTObjFinder> findList;
            if (_mapDict.TryGetValue(_cacheNameKey, out findList))
            {
                findList.Add(this);
            }
            else
            {
                findList = new List<LTObjFinder>() { this };
                _mapDict.Add(nameKey, findList);
            }
        }

        private void OnDestroy()
        {
            if (!_isAdded) return;
            _isAdded = false;
            List<LTObjFinder> findList;
            if (_mapDict.TryGetValue(_cacheNameKey, out findList))
            {
                if (findList.Contains(this))
                {
                    findList.Remove(this);
                }
                if (findList.Count == 0)
                {
                    _mapDict.Remove(_cacheNameKey);
                }
            }
        }

    }

    public static class LTObjFinderEx
    {
        public static List<GameObject> FindAllObj(this LTObjFinder[] objFinders, string keyValue)
        {
            var result = new List<GameObject>();

            foreach (var singleObj in objFinders)
            {
                if (singleObj.nameKey == keyValue)
                {
                    result.Add(singleObj.gameObject);
                }
            }

            return result;
        }
    }
}
