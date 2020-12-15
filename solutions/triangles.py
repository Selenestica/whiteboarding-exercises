def triangles(a, b, c):
    if (a + b <= c) or (a + c <= b) or (b + c <= a):
        return False
    elif a*a + b*b == c*c:
        return "right"
    else:
        return True


print(triangles(1, 3, 3))
