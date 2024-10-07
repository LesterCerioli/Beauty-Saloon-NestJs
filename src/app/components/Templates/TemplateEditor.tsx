import { useState } from 'react';

interface Template {
    name: string;
    content: string;
}

export default function TemplateEditor() {
    const [templates, setTemplates] = useState<Template[]>([]);

    const addTemplate = () => {
        const newTemplate: Template = { name: 'Novo Template', content: '' };
        setTemplates([...templates, newTemplate]);
    };

    const updateTemplate = (index: number, field: keyof Template, value: string) => {
        const updatedTemplates = [...templates];
        updatedTemplates[index][field] = value;
        setTemplates(updatedTemplates);
    };

    return (
        <div>
            <h1>Getenciar templates</h1>
            <button onClick={addTemplate}>Adicionar Template</button>
            {templates.map((template, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={template.name}
                        onChange={(e) => updateTemplate(index, 'name', e.target.value)}

                    />
                    <textarea
                        value={template.content}
                        onChange={(e) => updateTemplate(index, 'content', e.target.value)}

                    />

                </div>
            ))}
        </div>
    
    );
}