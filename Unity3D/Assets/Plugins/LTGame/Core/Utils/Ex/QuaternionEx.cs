using UnityEngine;

public static class QuaternionEx
{

    public static Quaternion RoundToInt(this Quaternion q)
    {
        var oldEular = q.eulerAngles.RoundToInt();
        return Quaternion.Euler(oldEular);
    }

}
