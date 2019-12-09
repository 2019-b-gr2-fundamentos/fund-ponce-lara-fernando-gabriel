amigos = Array["pedro","marco", "oscar"]
puts amigos
amigos = Array["1",true, 23]
puts amigos
#imprimir elementos de arreglos[0,1,2]
puts amigos[0]
puts amigos[1]
puts amigos[2]
#imprimir elementos de arreglos[0,1,2]
puts amigos[-1]
puts amigos[-2]
puts amigos[-3]
puts ""
#para no especificar el tamanio
papu = Array.new
puts "inserte el elemento de la nueva matriz"
papu[0] = gets.chomp()
puts "inserte el otro elemento de la nueva matriz"
papu[5] = gets.chomp()
puts papu
#conocer el tamanio del arreglo
puts papu.length
# preguntar si inclure al gun elemenro
puts amigos.include? "pedro"
puts amigos.include? 23
#sacar la matriz reversa
puts amigos.reverse
