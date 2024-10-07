// components/TemplateList.tsx

import { useState } from 'react';
import { Template } from '../models/Template';

export default function TemplateList() {
  // Estado para armazenar a lista de templates
  const [templates, setTemplates] = useState<Template[]>([]);

  // Estado para criar um novo template
  const [newTemplate, setNewTemplate] = useState<Template>({
    name: '',
    content: '',
  });

  // Função para adicionar um novo template à lista
  const addTemplate = () => {
    setTemplates([...templates, { ...newTemplate, id: templates.length + 1 }]);
    setNewTemplate({ name: '', content: '' });
  };

  return (
    <div>
      <h1>Gerenciar Templates</h1>

      {/* Formulário para criar novo template */}
      <div>
        <h2>Novo Template</h2>
        <input
          type="text"
          placeholder="Nome do template"
          value={newTemplate.name}
          onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
        />
        <textarea
          placeholder="Conteúdo do template"
          value={newTemplate.content}
          onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
        />
        <button onClick={addTemplate}>Adicionar Template</button>
      </div>

      {/* Lista de templates criados */}
      <div>
        <h2>Templates</h2>
        <ul>
          {templates.map((template) => (
            <li key={template.id}>
              <strong>{template.name}:</strong> {template.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
