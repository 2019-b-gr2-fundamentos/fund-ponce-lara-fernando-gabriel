puts "entra el numero 1"
num1 =gets.chomp().to_f
puts "entra el operador"
op =gets.chomp()
puts "entra el numero2"
num2 =gets.chomp().to_f

if op == "+"
    puts  (num1+num2)
elsif op == "-"
    puts (num1-num2)
elsif op == "/"
    puts (num1/num2)
elsif op == "*"
    puts (num1*num2)
else
    puts "operador invalido" 
end


