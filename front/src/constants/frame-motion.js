const scalemotion = {
    initial: {
        scale : 0.8,
        opacity: 0,
    },
    animate: {
        scale : 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
    },
};
const xmotion = {
    initial: {
        x : 10,
        opacity: 0,
    },
    animate: {
        x : 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
    },
};
const ymotion = {
    initial: {
        y : 20,
        opacity: 0,
    },
    animate: {
        y : 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
    },
};
export {scalemotion,xmotion , ymotion}