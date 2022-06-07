# per: https://docs.solana.com/developing/clients/jsonrpc-api
# caveat, use -X sparingly per https://youtu.be/I6id1Y0YuNk?t=1330

# Health status calls
# This GET request to ...solana.com/health will always return an
# HTTP 200 OK response with a body of "ok", "behind" or "unknown"
curl https://api.devnet.solana.com/health
curl https://api.mainnet-beta.solana.com/health

# curl http://localhost:8899 -H "Content-Type: application/json" -d '
# curl http://192.168.1.88:8899 -H "Content-Type: application/json" -d '
curl https://api.devnet.solana.com \
-H "Content-Type: application/json" -d \
'{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getBalance",
    "params": [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        {"commitment": "finalized"}
    ]
}'

# Devnet e.g.
curl https://api.devnet.solana.com \
-H "Content-Type: application/json" -d \
'{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        {"encoding": "base58"}
    ]
}'

# Wallet example from docs.solana.com: https://docs.solana.com/developing/clients/jsonrpc-api#getaccountinfo
curl https://api.devnet.solana.com \
-H "Content-Type: application/json" -d \
'{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
        "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
        {"encoding": "base58"}
    ]
}'

# Mainnet Beta
curl https://api.mainnet-beta.solana.com \
-H "Content-Type: application/json" -d \
'{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
        "6MoX4kcNrC75Rihp6xfB36Zv5ePp4xKg7Lr3ka6TfefX",
        {"encoding": "base58"}
    ]
}'

# Useful
# getVersion https://docs.solana.com/developing/clients/jsonrpc-api#getversion
curl https://api.mainnet-beta.solana.com \
    -H "Content-Type: application/json" -d \
'{
    "jsonrpc": "2.0",
    "id": 1234,
    "method": "getVersion"
}'

# requestAirdrop https://docs.solana.com/developing/clients/jsonrpc-api#requestairdrop
curl https://api.devnet.solana.com \
    -H "Content-Type: application/json" -d \
    '{
        "jsonrpc": "2.0",
        "id": 1234,
        "method": "requestAirdrop",
        "params": [
            "6MoX4kcNrC75Rihp6xfB36Zv5ePp4xKg7Lr3ka6TfefX",
            1000000000
        ]
    }'

curl https://api.devnet.solana.com \
-H "Content-Type: application/json" -d \
    '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getBalance",
        "params": [
            "6MoX4kcNrC75Rihp6xfB36Zv5ePp4xKg7Lr3ka6TfefX",
            {"commitment": "finalized"}
        ]
    }'

# get health
curl https://api.devnet.solana.com \
-H "Content-Type: application/json" -d \
'{"jsonrpc":"2.0","id":1, "method":"getHealth"}'
