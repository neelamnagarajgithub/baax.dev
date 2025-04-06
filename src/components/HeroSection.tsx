
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="container relative px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <div className="mb-6 inline-block rounded-full bg-baax-100 px-3 py-1 text-sm text-baax-800 dark:bg-baax-800/20 dark:text-baax-200">
            v1.0.0 - Beta Release
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Next Generation Blueprint Builder
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            A powerful CLI tool that provides boilerplate code like Vite. Select frameworks, databases,
            and tools to generate your project instantly.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Documentation
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="code-block w-full max-w-lg">
            <pre><code>
              <span className="comment"># Install the CLI</span>{"\n"}
              <span className="function">npm</span> <span className="keyword">install</span> -g baax{"\n\n"}
              <span className="comment"># Create a new project</span>{"\n"}
              <span className="function">npx</span> baax create my-app{"\n\n"}
              <span className="comment"># Follow the interactive prompts</span>{"\n"}
              <span className="variable">? Select a framework:</span> React{"\n"}
              <span className="variable">? Select a database:</span> MongoDB{"\n"}
              <span className="variable">? Include TypeScript?</span> Yes{"\n"}
              <span className="variable">? Setup testing?</span> Yes{"\n\n"}
              <span className="comment"># Project created successfully!</span>
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
