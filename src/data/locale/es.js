const es = {
  posts: {
    singular: 'Artículo',
    plural: 'Artículos',
    seo: {
      label: 'SEO',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en los resultados de búsqueda de Google.',
      },
      slug: {
        label: 'Slug',
        hint: 'Estructura de enlace que se muestra en la barra de navegación.',
      },
      description: {
        label: 'Descripción',
        error: 'La descripción debe tener entre 140 y 160 caracteres',
        hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
      },
    },
    info: {
      label: 'Información',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en la página del artículo.',
      },
      category: {
        label: 'Categoría',
        hint: 'Categoría que se muestra en la página del artículo.',
      },
      date: {
        label: 'Fecha de publicación',
        hint: 'Fecha que se muestra en la página del artículo.',
      },
      author: {
        label: 'Autor',
        hint: 'Nombre que se muestra en la página del artículo.',
      },
      excerpt: {
        label: 'Extracto',
        hint: 'Extracto que se muestra en la página del artículo.',
      },
    },
    heroImage: {
      label: 'Imagen de portada',
      hint: 'Imagen que se muestra en la página del artículo.',
    },
    body: {
      label: 'Cuerpo',
      hint: 'Contenido que se muestra en la página del artículo.',
    },
  },
  categories: {
    singular: 'Categoría',
    plural: 'Categorías',
    seo: {
      label: 'SEO',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en los resultados de búsqueda de Google.',
      },
      slug: {
        label: 'Slug',
        hint: 'Estructura de enlace que se muestra en la barra de navegación.',
      },
      description: {
        label: 'Descripción',
        error: 'La descripción debe tener entre 140 y 160 caracteres',
        hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
      },
      heading: {
        label: 'Encabezado',
        hint: 'Título que se muestra en la página de la categoría.',
      },
    },
    body: {
      label: 'Cuerpo',
      hint: 'Contenido que se muestra en la página de la categoría.',
    },
  },
  authors: {
    singular: 'Autor',
    plural: 'Autores',
    title: {
      label: 'Nombre',
      hint: 'Nombre que se muestra en los artículos.',
    },
    photo: {
      label: 'Foto',
      hint: 'Foto que se muestra en los artículos.',
    },
  },
  pages: {
    singular: 'Página',
    plural: 'Páginas',
    seo: {
      label: 'SEO',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en los resultados de búsqueda de Google.',
      },
      slug: {
        label: 'Slug',
        hint: 'Estructura de enlace que se muestra en la barra de navegación.',
      },
      description: {
        label: 'Descripción',
        error: 'La descripción debe tener entre 140 y 160 caracteres',
        hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
      },
    },
    content: {
      label: 'Contenido',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en la página.',
      },
      body: {
        label: 'Cuerpo',
        hint: 'Contenido que se muestra en la página.',
      },
    },
  },
  settings: {
    label: 'Configuración',
    home: {
      label: 'Pagina de Inicio',
      seo: {
        label: 'SEO',
        title: {
          label: 'Título',
          hint: 'Título que se muestra en los resultados de búsqueda de Google.',
        },
        description: {
          label: 'Descripción',
          error: 'La descripción debe tener entre 140 y 160 caracteres',
          hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
        },
      },
      info: {
        label: 'Información',
        title: {
          label: 'Título',
          hint: 'Título que se muestra en la página de inicio.',
        },
        body: {
          label: 'Cuerpo',
          hint: 'Contenido que se muestra en la página de inicio.',
        },
      },
    },
    navigation: {
      label: 'Navegación',
      categories: {
        label: 'Categorías',
        hint: 'Categorías que se muestran en la barra de navegación.',
        category: 'Categoría',
      },
      pages: {
        label: 'Páginas',
        hint: 'Páginas que se muestran en la barra de navegación.',
        page: 'Página',
      },
    },
    logo: {
      label: 'Logo',
      multicolor: {
        label: 'Multi-Color',
        hint: 'Código SVG para el logo multicolor.',
      },
      onecolor: {
        label: '1-Color',
        hint: 'Código SVG para el logo a un color.',
      },
    },
    socialMedia: {
      label: 'Redes Sociales',
      links: {
        label: 'Enlaces Sociales',
        hint: 'Enlaces a redes sociales.',
        name: {
          label: 'Nombre',
          hint: 'Nombre de la red social para mostrar el icono.',
        },
        url: {
          label: 'URL',
          error: 'La URL debe comenzar con http:// o https:// para que sea valida',
          hint: 'URL del perfil de la red social.',
        },
      },
    },
    footer: {
      label: 'Pie de Página',
      pages: {
        label: 'Páginas',
        hint: 'Páginas que se muestran en el pie de página.',
        page: 'Página',
      },
    },
  },
};

module.exports = es;
