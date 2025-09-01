#!/usr/bin/env python3
"""
Portfolio Launch Script
Simple script to open your portfolio in the default web browser
"""

import webbrowser
import os
import http.server
import socketserver
from threading import Thread
import time

def launch_portfolio():
    """Launch the portfolio in the default web browser"""
    
    print("🚀 Launching your portfolio...")
    print("=" * 50)
    
    # Get the current directory (where the portfolio files are)
    portfolio_dir = os.path.dirname(os.path.abspath(__file__))
    index_file = os.path.join(portfolio_dir, 'index.html')
    
    # Check if index.html exists
    if not os.path.exists(index_file):
        print("❌ Error: index.html not found!")
        print("Make sure you're running this script from the portfolio directory.")
        return
    
    print("📁 Portfolio directory:", portfolio_dir)
    print("🌐 Opening portfolio in your default browser...")
    
    # Option 1: Simple file:// URL (works for basic functionality)
    file_url = f"file://{index_file}"
    print(f"📄 Local file URL: {file_url}")
    
    try:
        webbrowser.open(file_url)
        print("✅ Portfolio opened successfully!")
        print("\n📝 Next steps:")
        print("1. Replace 'Your Name' with your actual name in the content")
        print("2. Add your profile picture to assets/profile-placeholder.jpg")
        print("3. Add project screenshots to the assets folder")
        print("4. Update your contact information")
        print("5. Customize the skills and experience sections")
        print("\n📖 Check the README.md file for detailed customization instructions!")
        
    except Exception as e:
        print(f"❌ Error opening browser: {e}")
        print(f"You can manually open this URL in your browser: {file_url}")

def launch_server():
    """Launch a local server for better functionality (optional)"""
    
    print("\n🌟 Want to run with a local server? (Recommended for full functionality)")
    print("This provides a proper HTTP server instead of file:// URLs")
    
    choice = input("Start local server? (y/N): ").lower().strip()
    
    if choice in ['y', 'yes']:
        try:
            # Change to portfolio directory
            portfolio_dir = os.path.dirname(os.path.abspath(__file__))
            os.chdir(portfolio_dir)
            
            # Start a simple HTTP server
            PORT = 8000
            
            print(f"\n🚀 Starting local server on port {PORT}...")
            print("Press Ctrl+C to stop the server when you're done")
            
            handler = http.server.SimpleHTTPRequestHandler
            
            # Try to find an available port
            for port in range(8000, 8010):
                try:
                    with socketserver.TCPServer(("", port), handler) as httpd:
                        PORT = port
                        break
                except OSError:
                    continue
            
            with socketserver.TCPServer(("", PORT), handler) as httpd:
                server_url = f"http://localhost:{PORT}"
                print(f"✅ Server running at: {server_url}")
                
                # Open in browser after a short delay
                def open_browser():
                    time.sleep(1)
                    webbrowser.open(server_url)
                
                Thread(target=open_browser).start()
                print("\n🌐 Opening in browser...")
                print("Press Ctrl+C to stop the server")
                
                httpd.serve_forever()
                
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped. Thanks for checking out your portfolio!")
        except Exception as e:
            print(f"❌ Error starting server: {e}")
            print("Falling back to file:// URL method...")
            launch_portfolio()

if __name__ == "__main__":
    print("🎨 Personal Portfolio Launcher")
    print("=" * 50)
    
    # First, try the simple file method
    launch_portfolio()
    
    # Then offer the server option
    launch_server()
