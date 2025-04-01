// components/ui/CodeBlock.tsx
'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from '@/app/context/ThemeContext';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  maxHeight?: string;
}

const CodeBlock = ({ 
  code, 
  language = 'tsx', 
  className = '',
  maxHeight = '400px'
}: CodeBlockProps) => {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 max-w-3/3 ${className}`}>
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        {copied && (
          <div className="px-2 py-1 bg-green-500 text-white text-xs rounded-md flex items-center shadow-md">
            Copied!
          </div>
        )}
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-md bg-white/80 dark:bg-gray-700/80 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all shadow-sm border dark:border-gray-600 mr-4 cursor-pointer"
          aria-label="Copy code"
        >
          <Copy size={16} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <div 
        className="overflow-auto" 
        style={{ maxHeight }}
      >
        <SyntaxHighlighter
          language={language}
          style={darkMode ? atomDark : oneLight}
          showLineNumbers
          wrapLines={false}
          lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            background: darkMode ? '#101828 ' : '#F8FAFC',
            borderRadius: '0.5rem',
            minWidth: '100%',
            width: 'fit-content',
            maxWidth: '100%'
          }}
          lineNumberStyle={{
            color: darkMode ? '#64748B' : '#94A3B8',
            paddingRight: '1.5em',
            minWidth: '2.5em',
            userSelect: 'none'
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;