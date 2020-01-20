puts "PERSONAJES DE LOL"
puts "inserte el numero de elementos inicial que desea ingresar"
num_elementos = gets.chomp.to_i
vector_inicial = Array.new(num_elementos)

vector_inicial.each_with_index do |elementos,indice|
    puts "ingrese elemento de la posicion #{indice}"
    vector_inicial[indice]=gets.chomp()
end    
r = vector_inicial.length
puts "Su arreglo inicial es:"
print vector_inicial
puts ""
puts "escoja una opcion para:"



####################

def menu(p,erray,nuevo,ttt,qq)
    if qq=!0 
    puts "1 para    aniadir n numeros de elementos a la matriz"
    puts "2 para    actualizar elementos a la matriz"
    puts "3 para    borrar elementos a la matriz"
    puts "4 para    listar elementos a la matrizy salir"
    opcion=gets.chomp.to_i
    end
    ttt=0    
            case opcion
                when "1"
                    puts "ANIADIR"
                    puts "inserte el numero de elementos nuevos por aniadir a la matris"
                    m=gets.chomp.to_i
                    t=p+m
                            ix=p
                            while ix<=(p+m-1)
                                puts "ingrese el valor de la posicion #{ix}"
                                z=gets.chomp()
                                erray.push(z)
                                ix = ix+ 1
                            end  
                            print erray
                            nuevo =erray
                            puts ""
                    
                when "2"
                    puts "actualizar"
                    puts "no hubo cambios para actualizar"
                    nuevo=erray
                when "3"
                    puts "BORRAR"
                    puts "ingrese el numero de elementos a eliminar desde la izquierda, debe ser menor de #{3}"
                    k=gets.chomp.to_i

                        erray.pop(k)
                        nuevo=erray
                    print nuevo
                when "4"
                    puts "SALIR"
                    puts "su arreglo es"
                    nuevo=erray
                    ttt=1
                    print nuevo
                    puts "fin de programa"
                else 
                    puts "opcion mal insertada o fuera de rango"
            end
    www=[nuevo,ttt] 
    return www
end

r = vector_inicial.length
vector_salida=Array.new
opcion=0




ss=0
while ss<=100  and kkkk=4
    if ss=0
        puts "1 para    aniadir n numeros de elementos a la matriz"
        puts "2 para    actualizar elementos a la matriz"
        puts "3 para    borrar elementos a la matriz"
        puts "4 para    listar elementos a la matrizy salir"
        opcion=gets.chomp.to_i
    end
    if opcion!=4 

        nuevop=menu(r,vector_inicial,vector_salida,opcion,ss)[0]
        r = menu(r,vector_inicial,vector_salida,opcion,ss)[0].length
        vector_salida=Array.new
        kkkk=menu(r,vector_inicial,vector_salida,opcion,ss)[1]
        elsif opcion =4
            puts"usted no ha ingresado el valor numerico esperado"
            opcion=4
    end
    ss+=1
end
puts "ESTO ES EL FIN DE PROGRAMA"
puts "su vector final es"
print nuevop

