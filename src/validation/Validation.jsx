export const validName =  /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,30}(?:[ -][A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,30})*/gm

export const validEmail = /^(?<name>[a-zA-Z0-9.!#$%&*+=?^_`{|}~-]+)@(?<domain>[a-zA-Z0-9-]+)(?<tld>[.][a-zA-Z]{2,12})$/

export const validMessage = /^\p{L}{3,}$/u