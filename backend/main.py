from collections import defaultdict, deque
from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class PipelinePayload(BaseModel):
    nodes: list[dict[str, Any]]
    edges: list[dict[str, Any]]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, bool]:
    return {"ok": True}


@app.post("/pipelines/parse")
def parse_pipeline(payload: PipelinePayload) -> dict[str, int | bool]:
    node_ids = {str(node.get("id")) for node in payload.nodes}
    adjacency: dict[str, list[str]] = defaultdict(list)
    indegree = {node_id: 0 for node_id in node_ids}

    for edge in payload.edges:
        source = str(edge.get("source"))
        target = str(edge.get("target"))

        if source not in indegree:
            indegree[source] = 0
        if target not in indegree:
            indegree[target] = 0

        adjacency[source].append(target)
        indegree[target] += 1

    queue = deque([node for node, deg in indegree.items() if deg == 0])
    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1
        for neighbor in adjacency[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited_count == len(indegree)

    return {
        "num_nodes": len(payload.nodes),
        "num_edges": len(payload.edges),
        "is_dag": is_dag,
    }
