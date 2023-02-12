import { useSanityClient, groq } from 'astro-sanity'
import { createImageBuilder } from 'astro-sanity'

const imageBuilder = createImageBuilder(useSanityClient())

export function urlForImage(source: {}) {
    return imageBuilder.image(source)
}

export async function getInProgressProjects(slice?: string) {
    const projectQuery = groq`
  *[_type == "project" && dates.isInProgress]${
      slice ? `[${slice}]` : ''
  }| order(dates.startDate desc){
      _id,
      _createdAt,
      _updatedAt,
      name,
      mainImage{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
          },
        "colorVibrant": image.asset->metadata.palette.vibrant{
            background, foreground, title
          }
        },
      codeUrl{
        isPrivate,
        link
      },
      liveUrl{
        isPrivate,
        link
      },
      dates{
        isInProgress,
        startDate,
        endDate,
      },
      "employer": employer->{
        _id,
        name,
      image{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      },
      "technologies": techList[] {
        _type == 'reference' => @->{_id,title,description},
      },
      short,
      description,
      "self": *[_type == "author" && name == "Edwin Bartunek"][0]{
        name,
        image{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      }
    }
    `
    const response = await useSanityClient()
        .fetch(projectQuery)
        .then((projects) => projects)
    return response
}

export async function getProjects(slice?: string) {
    const projectQuery = groq`
  *[_type == "project"]${
      slice ? `[${slice}]` : ''
  }| order(dates.startDate desc){
      _id,
      _createdAt,
      _updatedAt,
      name,
      mainImage{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
          },
        "colorVibrant": image.asset->metadata.palette.vibrant{
            background, foreground, title
          }
        },
      codeUrl{
        isPrivate,
        link
      },
      liveUrl{
        isPrivate,
        link
      },
      dates{
        isInProgress,
        startDate,
        endDate,
      },
      "employer": employer->{
        _id,
        name,
      image{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      },
      "technologies": techList[] {
        _type == 'reference' => @->{_id,title,description},
      },
      short,
      description,
      "self": *[_type == "author" && name == "Edwin Bartunek"][0]{
        name,
        image{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      }
    }
    `
    const response = await useSanityClient()
        .fetch(projectQuery)
        .then((projects) => projects)
    return response
}

export async function getSelf() {
    const selfQuery = groq`
"*[_type == "author" && name == "Edwin Bartunek"][0]{
        name,
        image{
        alt,
        "src": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      }`
    const response = await useSanityClient()
        .fetch(selfQuery)
        .then((self) => self)
    return response
}
