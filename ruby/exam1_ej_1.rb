=begin
    
puts = "QUE OPERACION DESEAS REALIZAR"
puts = ""
puts = "operacion basica (+,/,*,-)                       -->> selecione 1"#1-4
puts = "operacion area de un circulo conociendo el radio -->> selecione 2"#5
puts = "operacion residuo de una division                -->> selecione 3 "#6 propuesto por mi
puts = "operacion raiz cuadrada                          -->> selecione 4 "#7
puts = "operacion raiz cubica                            -->> selecione 5 "#8
puts = "operacion elevar a la n-sima potencia            -->> selecione 6 "#9
puts = "operacion sacar el seno de un valor              -->> selecione 7 "#10

=end

puts = "inserta el numero asociado a la opercion"

ejer = gets.chomp().to_f
##### es esencial primero definir las variables antes de llamarlas

#definimos la funcion de operaciones basicas   {1-4}
def suma(num1,num2)
    resultado=num1+num2
    puts resultado
    return resultado
end
def resta(num1,num2)
    resultado=num1-num2
    puts resultado
    return resultado
end
def multiplicacion(num1,num2)
    resultado=num1*num2
    puts resultado
    return resultado
end
def division(num1,num2)
    resultado=num1/num2
    puts resultado
    return resultado
end

# ejercicio que me propusieron  {5}
def area_circulo(r)
    area=nil
    area=(2*3.14159265359*r)
    puts "el area es" 
    puts area
    return area

end
# residuo de una division  {6}
def resi(n1,n2)
    resultado = n1%n2
    puts resultado
    return resultado
end
# raiz cuadrada de un numero  {7}
def raizsq(n1)
    resultado=  Math.sqrt(n1)
    puts resultado
    return resultado
end
# raiz de cubica  un numero  {8}
def raizcb(n1)
    resultado=  Math.cbrt(n1)
    puts resultado
    return resultado
end
# residuo de una division  {9}
def coseno(n1)
    resultado = Math.cos(n1)
    puts resultado
    return resultado
end
# residuo de una division  {10}
def seno(n1)
    resultado = Math.sin(n1)
    puts resultado
    return resultado
end
################################
case ejer 
    when 1  #1-4
        puts "entra el numero 1" 
        num1 =gets.chomp().to_f
        puts "entra el operador basico"
        op =gets.chomp()
        puts "entra el numero2"
        num2 =gets.chomp().to_f
                case op
                    when "+"
                        suma(num1,num2)
                    when "-"
                        resta(num1,num2)
                    when "*"
                        multiplicacion(num1,num2)
                    when "/"
                        division(num1,num2)
                    else
                        puts "error de sintaxis ocurrido"
                end
            
    when 2  #5
        puts "entra el radio del circulo que deseas calcular"
        radio=gets.chomp().to_f
        area_circulo(radio)
    when 3  #6
        puts "residuo de una division"
        puts "entra el numero 1" 
        num1 =gets.chomp().to_f
        puts "entra el numero2"
        num2 =gets.chomp().to_f
        resi(num1,num2)
    when 4  #7
        puts "raiz cuadrada de un numero"
        puts "entra el numero a calcular" 
        num1 =gets.chomp().to_f 
        raizsq(num1)   
    when 5  #8
        puts "raiz cubica de un numero"
        puts "entra el numero a calcular" 
        num1 =gets.chomp().to_f 
        raizcb(num1)
    when 6  #9
        puts "sacar el coseno de un numero"
        puts "entra el numero  para sacar su coseno en radianes" 
        num1 =gets.chomp().to_f
        coseno(num1)
    when 7  #10
        puts "sacar el seno de un numero"
        puts "entra el numero  para sacar su seno en radianes" 
        num1 =gets.chomp().to_f
        seno(num1)
    else 
end
        



