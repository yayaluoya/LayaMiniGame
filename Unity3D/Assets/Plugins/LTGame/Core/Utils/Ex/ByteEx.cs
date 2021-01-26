using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public static class ByteEx
{

    public static bool IsNullOrEmpty(this byte[] bytes)
    {
        return bytes == null || bytes.Length == 0;
    }

}
