using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

public static class IntEx
{

    public static bool Contains(this int[] array, int value)
    {
        foreach (var item in array)
        {
            if (item == value) return true;
        }
        return false;
    }

}
