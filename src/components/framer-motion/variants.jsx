export const containerVariant = {
    initial: {
        x: "50vw",
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.2
        }
    }, 
    exit:{
        x: '-50vw',
        opacity: 0,
        transition: {
            duration: 0.2

        }
    }
}