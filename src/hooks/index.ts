import { getRawFormData, resetForm, updateForm, useForm, validateForm } from 'vue3-form';
import { SectionInterface, SelectOption } from '../types';

export const useSectionForm = () => {
  const form = useForm({
    content: {},
    size: { value: 'md' },
    type: { value: 'opener' },
  });

  const sizes: SelectOption[] = [
    { title: 'Large', value: 'lg' },
    { title: 'Medium', value: 'md' },
    { title: 'Small', value: 'sm' },
  ];

  const types: SelectOption[] = [
    { title: 'Salutation', value: 'salutation' },
    { title: 'Opener', value: 'opener' },
    { title: 'Body', value: 'body' },
    { title: 'Closer', value: 'closer' },
    { title: 'Signature', value: 'signature' },
  ];

  const getData = () => getRawFormData(form) as unknown as SectionInterface;
  const validate = () => validateForm(form);
  const reset = () => resetForm(form);
  const updateFields = (section: SectionInterface) => {
    Object.keys(section).forEach((key) => {
      if (key === 'id') return;
      form.value.fields[key].value = section[key as keyof SectionInterface] as string;
    });
  };

  return { form, types, sizes, getData, reset, updateFields, validate };
};
