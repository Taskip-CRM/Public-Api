import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../lib/constants';

interface ApiTesterProps {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  defaultBody?: any;
  description?: string;
}

export default function ApiTester({ endpoint, method, defaultBody, description }: ApiTesterProps) {
  const [apiKey, setApiKey] = useState('');
  const [requestBody, setRequestBody] = useState(defaultBody ? JSON.stringify(defaultBody, null, 2) : '');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [showTester, setShowTester] = useState(false);

  // Load API key from session storage on component mount
  useEffect(() => {
    const savedKey = sessionStorage.getItem('taskip_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  // Save API key to session storage when it changes
  useEffect(() => {
    if (apiKey) {
      sessionStorage.setItem('taskip_api_key', apiKey);
    }
  }, [apiKey]);

  const executeRequest = async () => {
    if (!apiKey) {
      setError('Please enter your API key');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);
    setResponseStatus(null);

    try {
      const headers: HeadersInit = {
        'X-Secret-Key': apiKey,
        'Content-Type': 'application/json',
      };

      const options: RequestInit = {
        method,
        headers,
      };

      if (method !== 'GET' && requestBody) {
        try {
          // Validate JSON
          JSON.parse(requestBody);
          options.body = requestBody;
        } catch (e) {
          setError('Invalid JSON in request body');
          setLoading(false);
          return;
        }
      }

      const url = `${API_BASE_URL}${endpoint}`;
      const res = await fetch(url, options);
      
      setResponseStatus(res.status);
      
      const data = await res.json();
      setResponse(data);
      
      if (!res.ok) {
        setError(`HTTP ${res.status}: ${res.statusText}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-tester" style={{ 
      border: '1px solid #e5e7eb', 
      borderRadius: '8px', 
      padding: '16px',
      marginTop: '16px',
      marginBottom: '16px',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>🧪 Test This Endpoint</h4>
        <button
          onClick={() => setShowTester(!showTester)}
          style={{
            padding: '4px 12px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            backgroundColor: 'white',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          {showTester ? 'Hide' : 'Show'} Tester
        </button>
      </div>

      {showTester && (
        <>
          {description && (
            <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>{description}</p>
          )}

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>
              API Key {!apiKey && <span style={{ color: '#ef4444' }}>*</span>}
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your secret key"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
            <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
              Your key is stored in session storage and cleared when you close the tab
            </p>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>
              Endpoint
            </label>
            <div style={{
              padding: '8px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              fontSize: '13px',
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                padding: '2px 6px',
                backgroundColor: method === 'GET' ? '#10b981' : method === 'POST' ? '#3b82f6' : method === 'PUT' ? '#f59e0b' : '#ef4444',
                color: 'white',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '600'
              }}>
                {method}
              </span>
              <span>{API_BASE_URL}{endpoint}</span>
            </div>
          </div>

          {method !== 'GET' && (
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>
                Request Body
              </label>
              <textarea
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          )}

          <button
            onClick={executeRequest}
            disabled={loading || !apiKey}
            style={{
              padding: '8px 16px',
              backgroundColor: loading || !apiKey ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loading || !apiKey ? 'not-allowed' : 'pointer',
              width: '100%'
            }}
          >
            {loading ? 'Sending Request...' : 'Send Request'}
          </button>

          {error && (
            <div style={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: '#fee2e2',
              border: '1px solid #fecaca',
              borderRadius: '4px',
              color: '#991b1b',
              fontSize: '13px'
            }}>
              <strong>Error:</strong> {error}
            </div>
          )}

          {response && (
            <div style={{ marginTop: '12px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <label style={{ fontSize: '12px', fontWeight: '500' }}>
                  Response
                </label>
                {responseStatus && (
                  <span style={{
                    padding: '2px 8px',
                    backgroundColor: responseStatus >= 200 && responseStatus < 300 ? '#10b981' : '#ef4444',
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '600'
                  }}>
                    {responseStatus}
                  </span>
                )}
              </div>
              <pre style={{
                padding: '12px',
                backgroundColor: '#1f2937',
                color: '#f3f4f6',
                borderRadius: '4px',
                fontSize: '12px',
                overflow: 'auto',
                maxHeight: '400px'
              }}>
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}