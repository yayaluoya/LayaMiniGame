using UnityEngine;

public static class Vector3Ex
{


    public static float Magnitude2D(this Vector3 vec)
    {
        return Mathf.Sqrt(vec.x * vec.x + vec.z * vec.z);
    }

    public static Vector3 YZero(this Vector3 vec, float yaw)
    {
        vec.y = yaw;
        return vec;
    }

    public static Vector3 YZero(this Vector3 vec)
    {
        vec.y = 0;
        return vec;
    }

    public static Vector3 XZero(this Vector3 vec)
    {
        vec.x = 0;
        return vec;
    }

    public static Vector3 ZZero(this Vector3 vec)
    {
        vec.z = 0;
        return vec;
    }

    public static Vector3 ClampY(this Vector3 vec, float min_y, float max_y)
    {
        if (vec.y < min_y)
        {
            vec.y = min_y;
        }
        if (vec.y > max_y)
        {
            vec.y = max_y;
        }
        return vec;
    }

    public static Vector3 RoundToInt(this Vector3 vec)
    {
        vec.x = Mathf.RoundToInt(vec.x);
        vec.y = Mathf.RoundToInt(vec.y);
        vec.z = Mathf.RoundToInt(vec.z);
        return vec;
    }

    public static bool IsSimilar(this Vector3 vec, Vector3 another, float similarDistance = 0.1f)
    {
        var offset = vec - another;
        return Mathf.Abs(offset.x) < similarDistance && Mathf.Abs(offset.y) < similarDistance && Mathf.Abs(offset.z) < similarDistance;
    }

    /// <summary>
    /// 格式(xx,xx,xx)
    /// </summary>
    /// <param name="str"></param>
    /// <returns></returns>
    public static Vector3 ToVector3(this string str)
    {
        var payLoad = str.Substring(1, str.Length - 2);
        var floats = payLoad.SplitToFloat(",");
        return new Vector3(floats[0], floats[1], floats[2]);
    }

    public static Vector3 ScaleWith(this Vector3 vec, Vector3 scale)
    {
        vec.x *= scale.x;
        vec.y *= scale.y;
        vec.z *= scale.z;
        return vec;
    }

}
