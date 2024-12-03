import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renderiza el título correctamente', () => {
    render(<App />);
    expect(screen.getByText('Mi Lista de Tareas')).toBeInTheDocument();
  });

  test('permite agregar una nueva tarea', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Nueva tarea...');
    const button = screen.getByText('Agregar');
    
    fireEvent.change(input, { target: { value: 'Nueva tarea de prueba' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Nueva tarea de prueba')).toBeInTheDocument();
  });

  test('no agrega tareas vacías', () => {
    render(<App />);
    const button = screen.getByText('Agregar');
    
    fireEvent.click(button);
    const items = screen.queryAllByRole('listitem');
    
    expect(items.length).toBe(0);
  });

  test('limpia el input después de agregar una tarea', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Nueva tarea...');
    const button = screen.getByText('Agregar');
    
    fireEvent.change(input, { target: { value: 'Tarea de prueba' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });
}); 