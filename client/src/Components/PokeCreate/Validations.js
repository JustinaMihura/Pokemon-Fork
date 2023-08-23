export default function validation (form) {
    let errors = {};
    
    if(!form.name) {
         errors.name = "Tienes que agregarle un nombre único"

    }
    else if(form.name.length < 3) errors.name = "Nombre del pokemon muy corto";  

    else if(form.name.length > 20) errors.name = "Nombre del pokemon muy largo";     
    
    if(!form.image) {
        errors.image = "Tienes que agregarle una imagen que no sea de origen local"
    };
    if(!form.life) {
        errors.life = "Tienes que agregarle una estadistica de vida"
    } else if(!/^[0-9]+$/.test(form.life)) {
        errors.life = "Tiene que ser un número"
    }
    if(!form.speed) {
        errors.speed = "Tienes que agregarle una estadisticas de velocidad"
    } else if (!/^[0-9]+$/.test(form.speed)) {
        errors.speed = "Tiene que ser un número"
    };
    if(!form.attackDamage) {
        errors.attackDamage = "Tienes que agregarle una estadistica de ataque"
    } else if(!/^[0-9]+$/.test(form.attackDamage)) {
        errors.attackDamage = "Tiene que ser un número"
    };
    if(!form.magicDamage) {
        errors.magicDamage = "Tienes que agregarle una estadistica de daño mágico"
    } else if(!/^[0-9]+$/.test(form.magicDamage)) {
        errors.magicDamage = "Tiene que ser un número"
    };
    if(!form.defense) {
        errors.defense = "Tienes que agregarle una estadistia de defensa"
    } else if(!/^[0-9]+$/.test(form.defense)) {
        errors.defense = "Tiene que ser un número"
    };
    if(!form.weight) {
        errors.weight = "Tienes que agregarle una estadistica de peso"
    } else if (!/^[0-9]+$/.test(form.weight)) {
        errors.weight = "Tiene que ser un número"
    };
    if(!form.type) {
        errors.type = "Tu pokemon tiene que tener un tipo no?"
    };
    return errors
}