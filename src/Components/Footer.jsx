import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>© {new Date().getFullYear()} YourName</div>
        <div className="flex gap-4">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}