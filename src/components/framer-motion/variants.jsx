export const containerVariant = {
    initial: {
        x: "50vw",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.4
        }
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0.4

        }
    }, 
    exit:{
        x: '-50vw',
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.4

        }
    }
}