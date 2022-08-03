export const dropIn = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate:{
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    }, 
    exit:{
        y: 100,
        opacity: 0,
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