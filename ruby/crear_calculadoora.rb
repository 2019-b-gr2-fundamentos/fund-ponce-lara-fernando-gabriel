
#RUBY AL PRINCIPIO SOLO TOMA como strings
puts "entra un numero"
num1 = gets.chomp()
puts "entra otro numero"
num2 = gets.chomp()
puts "la suma es"
puts (num1+ num2)
#lo convertimos de strings a numeros enteros
puts (num1.to_i+ num2.to_i)
#para convertirlos en flotantes
puts (num1.to_f+ num2.to_f)
#para convertir a flotante desde el input
puts "entra un numero"
num1 = gets.chomp().to_f
puts "entra otro numero"
num2 = gets.chomp().to_f
puts "la suma es"
puts (num1+ num2)



