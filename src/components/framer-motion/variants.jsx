export const dropIn = {
    initial: {
        y: 100
    },
    animate:{
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            when: 'afterChildren',
            staggerChildren: 0.4
        }
    }, 
    exit:{
        y: 100
    }
}

export const childDrop = {
    initial: {
        y: -100
    },
    animate:{
        y: 0
    }, 
    exit:{
        y: -100
    }
}