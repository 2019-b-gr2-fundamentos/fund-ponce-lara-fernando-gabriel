#definir un metodo
#solo ejecuta el metodo si lo llama
def decirhola
    puts "hola ricardo"
end

puts "me llamo ricardo"
decirhola

#aniadir parametros en el metodo
def decirpres(name ,edad,pais)
    puts "hola "+ name
    puts "tienes " +edad + " anios"
    puts "eres de" + pais
end

puts "parte 2"
decirpres("alex","16","uruguay")

#aniadir parametros en el metodo valores por default
def decirpres(name="pedro" ,edad="20",pais="panama")
    puts "hola "+ name
    puts "tienes " +edad + " anios"
    puts "eres de" + pais
end

puts "parte 2"
decirpres