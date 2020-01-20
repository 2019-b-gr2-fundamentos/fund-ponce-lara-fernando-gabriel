def el_cubo_de(m)
    r=[m,m*m,m*m*m]
    h=m+m
    p=[r,h]
    return p
end

print el_cubo_de(3)
puts ""
print el_cubo_de(3)[0]