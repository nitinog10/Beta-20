# 🔧 Troubleshooting Guide

## ⚠️ "Error loading cultural insights. Check backend connection"

### Problem
The backend is running but doesn't have the new Cultural Insights and Smart Planner endpoints.

### Solution
**Backend needs restart to load new code!**

### Quick Fix:
```
1. Close the backend terminal window
2. Double-click: RESTART_BACKEND.bat
3. Wait for all endpoints to show (should see 16 endpoints)
4. Refresh browser (F5)
5. Try Cultural Insights again
```

### Verify It's Fixed:
Look for these in backend terminal:
```
✅ Should see:
   - 🎭 Cultural Insights: POST /api/cultural/insights
   - 🗺️ Smart Planner: POST /api/planner/smart
   - 💰 Budget Calculator: POST /api/budget/calculate
   - 🌿 Eco Routes: POST /api/eco/routes

❌ If NOT showing:
   → Backend is running old code
   → Must restart!
```

---

## Common Issues & Solutions

### 1. Backend Shows "Connected" but Features Don't Work

**Symptom:** Green dot shows "Connected" but new pages fail

**Cause:** Backend started before new code was added

**Fix:**
```bash
RESTART_BACKEND.bat
```

### 2. "404 Not Found" Error

**Symptom:** Alert says endpoint not found

**Cause:** Backend doesn't have new routes

**Fix:**
```bash
# Full restart
1. Close ALL terminal windows
2. Double-click: start-react.bat
3. Wait 10 seconds
4. Browser opens with working backend
```

### 3. Cultural Insights Shows "Loading..." Forever

**Symptom:** Purple button stuck on "Loading..."

**Cause:** Backend timeout or API key issue

**Fix:**
```bash
# Check backend terminal for errors
# Look for OpenAI API errors
# Verify OPENAI_API_KEY in backend/.env
```

### 4. Smart Planner Not Generating

**Symptom:** Button spins but no results

**Cause:** Backend missing or OpenAI quota exceeded

**Fix:**
```bash
1. Check backend console for errors
2. Verify OpenAI API key has credits
3. Try with fewer destinations (start with 2)
```

---

## Testing Checklist

### Test 1: Backend Status
```
✓ Green "Connected" showing
✓ Backend terminal shows 16 endpoints
✓ No red errors in terminal
```

### Test 2: Cultural Insights
```
1. Click "Cultural" tab
2. Enter: "Jaipur"
3. Click "🎭 Explore Culture"
✓ Results load in 3-5 seconds
✓ Cards show festivals, customs, etc.
```

### Test 3: Smart Planner
```
1. Click "Smart Planner" tab
2. Add: Delhi, Agra
3. Duration: 3 days
4. Select: Heritage, Food
5. Click "🚀 Generate Multi-City Plan"
✓ Results show optimized route
✓ Budget breakdown appears
```

---

## Quick Diagnostics

### Run This:
```bash
CHECK_BACKEND.bat
```

This will test if new endpoints exist.

### Expected Output:
```
Testing backend endpoints...
{"status":"OK","message":"BharatTrip AI Backend is running!"}

Checking for new endpoints...
{"success":true,"destination":"Test",...}
```

### If You See Error:
```
{"error":"Cannot POST /api/cultural/insights"}
```
→ **Backend needs restart!**

---

## Complete Reset (If All Else Fails)

```bash
# 1. Close ALL terminal windows

# 2. Delete node_modules (optional, if corrupt)
cd backend
Remove-Item node_modules -Recurse -Force
npm install

# 3. Verify .env file exists
# Check: backend/.env has your API keys

# 4. Start fresh
cd ..
start-react.bat
```

---

## Browser Console Debugging

### Open Developer Tools
```
Press F12
Click "Console" tab
```

### Look For:
```
✅ Good:
   "Fetching cultural insights for: Varanasi"
   "Response status: 200"
   "Cultural insights data: {success: true, ...}"

❌ Bad:
   "Response status: 404"  → Restart backend
   "Response status: 500"  → Check API keys
   "Network error"         → Backend not running
```

---

## Still Having Issues?

### Check These:

1. **Backend Running?**
   - Open http://localhost:3001/api/health in browser
   - Should show: `{"status":"OK"}`

2. **Port 3001 Free?**
   - Check if another app is using it
   - Change PORT in backend/.env if needed

3. **API Keys Valid?**
   - Check backend/.env
   - Verify OpenAI key starts with `sk-`
   - Check API credits/quota

4. **Internet Connection?**
   - APIs need internet to work
   - Check firewall settings

---

## Error Messages Decoded

| Error | Meaning | Fix |
|-------|---------|-----|
| "Check backend connection" | Can't reach API | Restart backend |
| "404 Not Found" | Endpoint missing | Backend has old code |
| "500 Internal Error" | Backend crashed | Check terminal for errors |
| "Network error" | Backend offline | Start backend |
| "Invalid API key" | Wrong credentials | Check .env file |

---

## Prevention

### Always Do This After Code Changes:

```bash
1. STOP backend (close terminal)
2. RESTART backend (RESTART_BACKEND.bat)
3. REFRESH browser (F5)
```

### Best Practice:
```
Keep backend terminal visible while working
→ You'll see errors immediately
→ Restart when you see red error messages
```

---

**Most Common Fix: Just restart the backend! 90% of issues solved.** 🔄
