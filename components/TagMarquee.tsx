const tags = [
  "bounding_box",
  "semantic_segmentation",
  "polygon",
  "keypoint",
  "3d_cuboid",
  "lidar_point_cloud",
  "named_entity",
  "sentiment",
  "transcription",
  "rlhf_ranking",
  "content_policy",
  "instance_mask",
];

export default function TagMarquee() {
  const loop = [...tags, ...tags];
  return (
    <div className="relative overflow-hidden border-y border-surface-border bg-surface/40 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-32" />
      <div className="flex w-max animate-marquee gap-3">
        {loop.map((t, i) => (
          <span key={i} className="tag-chip shrink-0">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
