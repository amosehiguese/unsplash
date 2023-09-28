import { Gallery } from './Gallery';
import { SearchForm } from './SearchForm';
import { ThemeToggle } from './ThemeToggle';

export const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
