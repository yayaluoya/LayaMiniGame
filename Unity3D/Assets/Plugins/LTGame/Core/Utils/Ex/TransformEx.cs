using UnityEngine;

public static class TransformEx
{

    public static void ClearChild(this Transform transform)
    {
        while (transform.childCount > 0)
        {
            Object.DestroyImmediate(transform.GetChild(0).gameObject);
        }
    }

    public static void SetLayerEx(this Transform transform, int layer)
    {
        transform.gameObject.layer = layer;
        for (int i = 0; i < transform.childCount; ++i)
        {
            var child = transform.GetChild(i);
            SetLayerEx(child, layer);
        }
    }

    public static void SetActiveEx(this Transform transform, bool setValue)
    {
        if (transform == null) return;
        transform.gameObject.SetActive(setValue);
    }

}
