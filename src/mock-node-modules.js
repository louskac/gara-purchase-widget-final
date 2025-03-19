// src/mock-node-modules.js
console.log('MOCK NODE MODULES LOADED');

// Performance from perf_hooks
export const performance = { 
  now: () => Date.now() 
};

// Crypto module with complete implementation
export const crypto = {
  // This implementation mimics crypto.createHash().update().digest()
  createHash: (algorithm) => ({
    update: (data) => ({
      digest: (encoding) => {
        // Simple hash function that works in a browser
        if (typeof data === 'string' || data instanceof Buffer) {
          const str = typeof data === 'string' ? data : data.toString('utf8');
          const hash = Array.from(str)
            .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
            .join('');
            
          return encoding === 'hex' ? hash : Buffer.from(hash).toString(encoding || 'hex');
        }
        return 'mock-hash';
      }
    })
  }),
  
  // This implementation mimics crypto.randomBytes().toString()
  randomBytes: (size) => {
    const bytes = new Uint8Array(size);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(bytes);
    } else {
      for (let i = 0; i < size; i++) {
        bytes[i] = Math.floor(Math.random() * 256);
      }
    }
    
    return {
      toString: (encoding) => {
        if (encoding === 'hex') {
          return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        }
        return Array.from(bytes).join('');
      }
    };
  }
};

// Buffer implementation for browser
class BufferPolyfill {
  constructor(input, encoding) {
    if (typeof input === 'string') {
      this.data = new TextEncoder().encode(input);
    } else if (input instanceof Uint8Array) {
      this.data = input;
    } else {
      this.data = new Uint8Array(0);
    }
  }
  
  toString(encoding) {
    if (encoding === 'hex') {
      return Array.from(this.data).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return new TextDecoder().decode(this.data);
  }
  
  static from(input, encoding) {
    return new BufferPolyfill(input, encoding);
  }
}

// Expose Buffer if it doesn't exist
if (typeof Buffer === 'undefined') {
  global.Buffer = BufferPolyfill;
}

// Path module with full implementation
export const path = {
  resolve: (...args) => args.filter(Boolean).join('/').replace(/\/+/g, '/'),
  join: (...args) => args.filter(Boolean).join('/').replace(/\/+/g, '/'),
  dirname: (path) => {
    const parts = path.split('/');
    parts.pop();
    return parts.join('/') || '.';
  },
  basename: (path, ext) => {
    const name = path.split('/').pop() || '';
    if (ext && name.endsWith(ext)) {
      return name.slice(0, -ext.length);
    }
    return name;
  },
  extname: (path) => {
    const base = path.split('/').pop() || '';
    const dot = base.lastIndexOf('.');
    if (dot === -1 || dot === 0) return '';
    return base.substring(dot);
  },
  parse: (path) => {
    const base = path.split('/').pop() || '';
    const dot = base.lastIndexOf('.');
    const ext = dot === -1 ? '' : base.substring(dot);
    const name = dot === -1 ? base : base.substring(0, dot);
    const dir = path.substring(0, path.length - base.length);
    
    return {
      root: '',
      dir,
      base,
      ext,
      name
    };
  },
  sep: '/'
};

// OS module with browser compatibility
export const os = {
  platform: () => 'browser',
  cpus: () => [{ model: 'Browser CPU' }],
  homedir: () => '/',
  type: () => 'Browser',
  release: () => '1.0',
  hostname: () => 'browser',
  arch: () => 'browser',
  EOL: '\n',
  endianness: () => 'LE',
  loadavg: () => [0, 0, 0],
  freemem: () => 1024 * 1024 * 1024, // 1GB
  totalmem: () => 4 * 1024 * 1024 * 1024, // 4GB
  uptime: () => 3600 // 1 hour
};

// FS module mock with essential methods
export const fs = {
  readFileSync: () => '',
  existsSync: () => false,
  writeFileSync: () => {},
  statSync: () => ({
    isDirectory: () => false,
    isFile: () => true,
    size: 0,
    mtime: new Date()
  }),
  readdirSync: () => [],
  mkdirSync: () => {},
  unlinkSync: () => {},
  createReadStream: () => ({}),
  createWriteStream: () => ({
    write: () => true,
    end: () => {}
  })
};

// Stream module mock
export const stream = {
  Duplex: class Duplex {},
  Readable: class Readable {
    pipe() { return this; }
    on() { return this; }
  },
  Writable: class Writable {
    write() {}
    end() {}
  },
  Transform: class Transform {
    pipe() { return this; }
  },
  PassThrough: class PassThrough {}
};

// Net module mock
export const net = {
  connect: () => ({
    on: () => {},
    write: () => {},
    end: () => {},
    setNoDelay: () => {},
    setTimeout: () => {}
  }),
  Socket: class Socket {
    connect() {}
    on() {}
    end() {}
  },
  createServer: () => ({
    listen: () => {},
    on: () => {}
  })
};

// TLS module mock
export const tls = {
  connect: () => ({
    on: () => {},
    write: () => {},
    end: () => {}
  }),
  createServer: () => ({
    listen: () => {},
    on: () => {}
  }),
  TLSSocket: class TLSSocket {}
};

// Child_process module mock
export const child_process = {
  spawn: () => ({
    on: () => {},
    stdout: { on: () => {} },
    stderr: { on: () => {} }
  }),
  exec: (cmd, cb) => { if (cb) cb(null, '', ''); }
};

// URL module mock
export const url = {
  parse: (urlStr) => {
    try {
      const u = new URL(urlStr);
      return {
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port,
        pathname: u.pathname,
        query: Object.fromEntries(u.searchParams),
        hash: u.hash
      };
    } catch (e) {
      return { protocol: '', hostname: '', port: '', pathname: urlStr, query: {}, hash: '' };
    }
  },
  format: (urlObj) => {
    return urlObj.protocol + '//' + urlObj.hostname + (urlObj.port ? ':' + urlObj.port : '') + urlObj.pathname;
  },
  resolve: (from, to) => {
    try {
      return new URL(to, from).toString();
    } catch (e) {
      return to;
    }
  }
};

// Default export for CommonJS require()
export default {
  crypto,
  path,
  fs,
  os,
  stream,
  net,
  tls,
  child_process,
  url,
  performance,
  // Individual exports for path to support require('path').join style imports
  join: path.join,
  resolve: path.resolve,
  dirname: path.dirname,
  basename: path.basename,
  extname: path.extname,
  parse: path.parse,
  // Individual exports for crypto
  createHash: crypto.createHash,
  randomBytes: crypto.randomBytes
};