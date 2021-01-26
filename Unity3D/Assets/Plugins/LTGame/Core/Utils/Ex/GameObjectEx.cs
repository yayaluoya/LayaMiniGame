using System.Collections.Generic;
using UnityEngine;

public static class GameObjectEx
{

    public static void SetLayerEx(this GameObject obj, int layer)
    {
        obj.transform.SetLayerEx(layer);
    }

    public static void SetActiveEx(this GameObject obj, bool setActive)
    {
        if (obj)
        {
            if (setActive && !obj.activeSelf)
            {
                obj.SetActive(true);
            }
            else if (!setActive && obj.activeSelf)
            {
                obj.SetActive(false);
            }
        }
    }

    public static void SetActiveEx(this GameObject[] objs, bool setActive)
    {
        if (objs == null) return;
        foreach (var obj in objs)
        {
            obj.SetActiveEx(setActive);
        }
    }

    public static void SetActiveEx(this List<GameObject> objs, bool setActive)
    {
        if (objs == null) return;
        foreach (var obj in objs)
        {
            obj.SetActiveEx(setActive);
        }
    }

    public static List<T> GetComponentsInChild<T>(this GameObject[] objs)
    {
        List<T> result = new List<T>();
        if (objs == null || objs.Length == 0) return result;
        foreach (var obj in objs)
        {
            var allGet = obj.GetComponentsInChildren<T>();
            result.AddRange(allGet);
        }
        return result;
    }


    public static void CreateSphere(Vector3 pos, string name = "test")
    {
        var obj = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        obj.transform.position = pos;
        obj.name = name;
    }

    public static GameObject NewInstance(this GameObject obj)
    {
        return GameObject.Instantiate(obj);
    }

}
