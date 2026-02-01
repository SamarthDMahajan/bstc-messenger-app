import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input/Input';
import { Button } from './Button/Button';
import { Checkbox } from './Checkbox/Checkbox';

const LoginFormDefinition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Logged in as: ${email}`);
    }, 2000);
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '40px auto', 
      padding: '40px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      fontFamily: 'sans-serif',
      backgroundColor: '#fff'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ margin: '0 0 8px', color: '#1a1a1a' }}>Welcome Back</h2>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Please enter your details to sign in.</p>
      </div>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <Input 
          label="Email" 
          placeholder="name@company.com" 
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          variant="outlined"
          id="login-email"
        />
        
        <Input 
          label="Password" 
          type="password" 
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          variant="outlined"
          id="login-password"
          helperText="Must be at least 8 characters"
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Checkbox label="Remember for 30 days" id="remember-me" />
          <a href="#" style={{ fontSize: '13px', color: '#007bff', textDecoration: 'none', fontWeight: 500 }}>
            Forgot password?
          </a>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          size="large" 
          isLoading={isLoading}
          style={{ width: '100%', marginTop: '12px' }}
        >
          Sign In
        </Button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
        Don't have an account? <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 600 }}>Sign up</a>
      </p>
    </div>
  );
};

const meta: Meta<typeof LoginFormDefinition> = {
  title: 'Examples/Login Screen',
  component: LoginFormDefinition,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LoginFormDefinition>;

export const Demo: Story = {};
