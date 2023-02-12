export interface Project {
    _id: string
    _createdAt: string
    _updatedAt: string
    name: string
    mainImage: {
        alt: string
        src: string
        lqip: string
        colorDominant: {
            background: string
            foreground: string
            title: string
        }
        colorVibrant: {
            background: string
            foreground: string
            title: string
        }
    }
    codeUrl: {
        isPrivate: string
        link: string
    }
    liveUrl: {
        isPrivate: boolean
        link: string
    }
    dates: {
        isInProgress: string
        startDate: string
        endDate: string
    }
    employer: {
        _id: string
        name: string
        image: {
            alt: string
            src: string
            lqip: string
            colorDominant: {
                background: string
                foreground: string
                title: string
            }
            colorVibrant: {
                background: string
                foreground: string
                title: string
            }
        }
    }
    technologies: [
        {
            _id: string
            title: string
            description: string
        }
    ]
    short: string
    description: [object]
    self: {
        name: string
        image: {
            alt: string
            src: string
            lqip: string
            colorDominant: {
                background: string
                foreground: string
                title: string
            }
            colorVibrant: {
                background: string
                foreground: string
                title: string
            }
        }
    }
}

interface Self {
    name: string
    image: {
        alt: string
        src: string
        lqip: string
        colorDominant: {
            background: string
            foreground: string
            title: string
        }
        colorVibrant: {
            background: string
            foreground: string
            title: string
        }
    }
}
