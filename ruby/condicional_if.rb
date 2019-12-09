fernando = true
#todo lo que sucede si es verdad va dentro del parentesis
if fernando
    puts "eres fernando"
else
    puts "no eres fernando"
end
# para intersecion de dos condiciones
puts "parte 2"
guapo = false

if fernando and guapo
    puts "eres fernando y eres guapo"
else
    puts "no eres fernando o no eres guapo"
end

puts "parte 3"

if fernando or guapo
    puts "eres fernando o eres guapo"
else
    puts "no eres fernano ni guapo"
end
##### elsif es para crear otro if 
####### ! es para la negacion
puts "parte 4"
if guapo
    puts " eres guapo"
elsif !guapo
    puts "no eres un guapo"
end