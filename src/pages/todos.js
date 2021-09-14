import * as React from 'react';
import { Layout, About } from '../components';
import { Link, graphql } from 'gatsby';

const TodosPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='Todos'>
        <div>
          Todos:
          <ul>
            <li>
              Que cada número tenga asociada una entrada y que cada día tenga
              escritos mio y de la nacha.
            </li>
            <li>
              Conectar cada uno de estos números con un mensaje escrito que voy
              a poner cada dia
            </li>
            <li>
              Que cada una de estas entradas esté en una carpeta específica con
              .mdx, y que tenga una foto asociada.
            </li>
            <li>Hero image donde se muestra la foto de ese día.</li>
            <li>
              Posibilidad de agregar comentarios a cada una de las entradas.
            </li>
            <li>
              Que se muestre el dia actual en función de cuánto mide el array
              mdx para esta página específica (cada día que pase este array va a
              crecer y eso significa que va a haber una más)
            </li>
            <li>
              Formato bonito de cada uno de estos elementos para que sea
              responsive también.
            </li>
          </ul>
        </div>
      </Layout>
    </main>
  );
};

export default TodosPage;
