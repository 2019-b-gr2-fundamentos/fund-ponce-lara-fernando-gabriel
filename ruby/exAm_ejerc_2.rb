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

def menu(p,erray,nuevo)
    puts "1 para    aniadir n numeros de elementos a la matriz"
    puts "2 para    actualizar elementos a la matriz"
    puts "3 para    borrar elementos a la matriz"
    puts "4 para    listar elementos a la matrizy salir"
    opcion=gets.chomp


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
                print nuevo
                puts "fin de programa"
            else 
                puts "opcion mal insertada o fuera de rango"
        end 
    return nuevo
end



r = vector_inicial.length
vector_salida=Array.new
nuevop=menu(r,vector_inicial,vector_salida)
puts "se sale del metodo el return"
print nuevop

