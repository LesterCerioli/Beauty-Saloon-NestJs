import { useState } from 'react';

interface Page {
  title: string;
  template: string;
  content: string;
}

export default function PageManager() {
  const [pages, setPages] = useState<Page[]>([]);

  const addPage = () => {
    const newPage: Page = { title: 'Nova Página', template: '', content: '' };
    setPages([...pages, newPage]);
  };

  const updatePage = (index: number, field: keyof Page, value: string) => {
    const updatedPages = [...pages];
    updatedPages[index][field] = value;
    setPages(updatedPages);
  };

  return (
    <div>
      <h1>Gerenciar Páginas</h1>
      <button onClick={addPage}>Adicionar Página</button>
      {pages.map((page, index) => (
        <div key={index}>
          <input
            type="text"
            value={page.title}
            onChange={(e) => updatePage(index, 'title', e.target.value)}
          />
          <select
            value={page.template}
            onChange={(e) => updatePage(index, 'template', e.target.value)}
          >
            {/* Adicionar lógica para listar templates disponíveis */}
            <option value="">Selecione um Template</option>
          </select>
          <textarea
            value={page.content}
            onChange={(e) => updatePage(index, 'content', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

