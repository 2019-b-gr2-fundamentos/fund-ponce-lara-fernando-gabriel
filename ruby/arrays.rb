### crear un arreglo
papu =[1,2,3,4,5]
print papu 
puts""
#   %w para separar arrays por espacios
papunchis = %w[1 2 3 4 5 ]
print papunchis
# iterar calificaciones
#  i es elemento de cada matriz
papu.each do |i|
        puts "ahora el elemento es #{i}"
end

papunchis.each do |i|
    puts "ahora el elemento es #{i}"
end


puts ""
# i es el elemento del arreglo , indexo es su respectivo intice
papunchis.each_with_index do |i,indexo|
    puts "ahora el elemento es #{i} con la posicion #{indexo}"
end
puts ""
puts "el promedio es "
suma = 0
papunchis.each do |i|
    suma =suma+ i.to_f
    puts suma
end

promedio=(suma.to_f/papunchis.lenght())
puts "el promediio es"
puts promedio